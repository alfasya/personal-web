async function homeHandler(req, res) {
    res.status(200);
    res.json({
        status: 200,
        message: "Home Page"
    });
}

export { homeHandler }