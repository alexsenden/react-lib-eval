<div style={{display: 'flex', flexDirection: 'column'}}>
  <ToggleSwitch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
  <Badge color={'info'}>{darkMode ? "Dark Mode" : "Light Mode"}</Badge>
</div>
