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

// B2. Endpoint trả về một bài post cụ thể
app.get("/API/post/:id", (req, res) => {
    const postId = req.params.id;
    res.send(`This is post with id: ${postId}`);
});
// B3.Endpoint tạo mới một bài post
app.post("/API/post", (req, res) => {
    const postId = req.params.id;
    const { title, content, author } = req.body;

    res.json({
        data: {
            title: title,
            content: content,
            author: author
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
            title: title, 
            content: content,
            author: author  
        },
        message: "User updated successfully"
    });
});
// B4. Endpoint cập nhật một phần  bài post
app.put("API/post/:id", (red, res) =>{
    const postId = req.params.id;
    const {title} = red.boddy;

    const updatePost = {
        id:postId,
        title: title
    };
    res.json({
        data: updatePost,
        message: "Post updated successfully"
    })
})
// B5.Endpoint xóa một bài post
app.delete("API/post/:id", (req, res) => {
    const postId = req.params.id;
    res.send(`Deleted post with id: ${postId} successfully!`);
});