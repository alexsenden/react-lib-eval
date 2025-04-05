<div style={{display: 'flex', flexDirection: 'column'}}>
  <Toggle isOn={darkMode} onToggle={() => setDarkMode(!darkMode)} />
  <Badge bg={'blue'} >{darkMode ? "Dark Mode" : "Light Mode"}</Badge>
</div>
