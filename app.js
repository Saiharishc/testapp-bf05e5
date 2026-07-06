console.log('React App Loaded!');

// In a real React app, you would have your component definitions here.
// For this minimal example, we'll just simulate a React app.

// Example of fetching from the API
async function testApi() {
    try {
        const response = await fetch('/api/test');
        const data = await response.json();
        console.log('API Test Result:', data);
    } catch (error) {
        console.error('Error testing API:', error);
    }
}

testApi();
