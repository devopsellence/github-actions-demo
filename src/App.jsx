import './App.css'

function App() {
  return (
    <main>
      <h1>Deployed with devopsellence</h1>
      <p>
        This app demonstrates deploying a React app using the{' '}
        <a href="https://www.devopsellence.com" target="_blank" rel="noopener noreferrer">
          devopsellence
        </a>{' '}
        GitHub Action.
      </p>
      <ul>
        <li>Push to main and it deploys automatically</li>
        <li>Get a public domain with HTTPS</li>
        <li>
          Uses{' '}
          <a href="https://github.com/devopsellence/deploy-action" target="_blank" rel="noopener noreferrer">
            devopsellence/deploy-action
          </a>
        </li>
      </ul>
      <code>
        uses: devopsellence/deploy-action@v1
      </code>
    </main>
  )
}

export default App
