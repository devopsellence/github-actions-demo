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
      <p>
        Just push to main and your Docker image gets built, pushed, and deployed automatically.
      </p>
      <code>
        uses: devopsellence/deploy-action@v1
      </code>
    </main>
  )
}

export default App
