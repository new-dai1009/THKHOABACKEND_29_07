const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
//B1.Endpoint trả về tất bài post 
app.get("/API/posts", (req, res) => {
    res.send("Return posts successfully");
});

// Endpoint trả về một bài post cụ thể
app.get("/API/post/:id", (req, res) => {
    const postId = req.params.id;
    res.send(`This is post with id: ${postId}`);
});
// Endpoint tạo mới một bài post
app.post("/API/post/:id", (req, res) => {
    const postId = req.params.id;
    const { title, content, author } = req.body;

    res.json({
        data: {
            title: title || "Iphone",
            content: content || "Iphone ....",
            author: author || "Mike"
        },
        message: "User created successfully"
    });
});

// Endpoint cập nhật bài post
app.put("/API/post/:id", (req, res) => {
    const postId = req.params.id;
    const { title, content, author } = req.body;

    res.json({
        data: {
            title: title || "Iphone",
            content: content || "Iphone ....",
            author: author || "Mike"
        },
        message: "User updated successfully"
    });
});