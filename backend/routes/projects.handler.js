async function projectsHandler(req, res) {
    try {
        res.status(200).json({
            code: 200,
            message: "Projects Page"
        });
    } catch(err) {
        res.status(500).json({
            code: 500,
            error: {
                message: "Internal server error.",
                details: err,
            }
        });
    }
}

export { projectsHandler }