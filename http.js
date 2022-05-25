const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/')
    {
        res.end('Welcome to our home page')
        // res.end()
    }

    else if (req.url === '/about')
    {
        res.end('Welcome to our ABOUT page')
    }

    else
    {
        res.end(`
        <h2>Ooops</h2> 
        <p>Seem not to be able to find this page</p>
        <a href="/">HOME Page</a> 
        `)
    }
    
})

server.listen(5000)