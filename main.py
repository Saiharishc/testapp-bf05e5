from fastapi import FastAPI

app = FastAPI()

@app.get('/')
def serve_react_app():
    # In a real application, you would serve your React build here.
    # For this minimal example, we'll return a placeholder.
    return {"message": "Serving React App (placeholder)"}

@app.get('/api/test')
def test_api():
    return {"message": "API connectivity test successful!"}
