import fs from 'node:fs'
import { ESLint } from 'eslint'

function validateArgs(processArgs) {
  const args = {}
  for (let i = 2; i < processArgs.length; i++) {
    const [key, value] = processArgs[i].split('=')
    args[key] = value
  }

  const errors = []
  if (!args.outputDir) {
    errors.push(
      'Output directory argument must be passed using \'outputDir=<outputDir>\'',
    )
  }
  if (!args.inputDir) {
    errors.push(
      'Input directory argument must be passed using \'inputDir=<inputDir>\'',
    )
  }
  if (errors.length > 0) {
    throw new Error(errors.join('\n'))
  }

  return args
}

function preprocessContent(rawContent) {
  let content = rawContent.replaceAll(/<[^>]*(?=>)(?!>=)>/g, match => `${match}\n`)
  content = content.replaceAll('\n', '\n\n')
  content = content.replace(/^\s*/, '')

  return content
}

async function createFixedFile(outputContent, outputDir, filename) {
  const outputFileName = `${outputDir}/${filename}`
  let processedOutput = outputContent.replaceAll(/[ \t]*\{' '\}\n/g, '')
  processedOutput = processedOutput.replaceAll(/[>(]\n\n/g, match =>
    match.substring(0, match.length - 1))
  processedOutput = processedOutput.replaceAll(/\n+/g, '\n')
  fs.writeFile(outputFileName, processedOutput, (err) => {
    if (err)
      console.log(err)
  })
}

(async function main() {
  const args = validateArgs(process.argv)

  const eslint = new ESLint({
    fix: true,
  })

  fs.readdirSync(args.inputDir).forEach(async (file) => {
    const rawContent = fs.readFileSync(`${args.inputDir}/${file}`, 'utf8')
    const processedContent = preprocessContent(rawContent)

    const [result] = await eslint.lintText(processedContent)
    if (result.fatalErrorCount === 0) {
      const outputContent = result.output || processedContent
      createFixedFile(outputContent, args.outputDir, file)
    }
    else {
      const formatter = await eslint.loadFormatter('stylish')
      const resultText = formatter.format([result])
      console.log(resultText)
      console.log(result)
      console.log(rawContent)
    }
  })
})().catch((error) => {
  process.exitCode = 1
  console.error(error)
})
