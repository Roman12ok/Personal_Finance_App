const express = require('express')
const app = express()
const port = process.env.PORT || 1372

app.get('/api', (req, res) => {
    res.status(200).json({
        success: true,
        message: {
            name: 'Roman English',
            lastname: 'ahmadu',
            like: ['food', 'fo', 'mysql'],
            more: {
                text: 'testing 123'
            }
        }
    })
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))