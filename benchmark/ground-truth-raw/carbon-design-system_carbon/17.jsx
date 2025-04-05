<div style={{display: 'flex', flexDirection: 'column'}}>
  <Toggle onToggle={() => setDarkMode(!darkMode)} />
  <Badge text={darkMode ? "Dark Mode" : "Light Mode"} type={"primary"} />
</div>
