const pool = require('../models/db');

const postNewBlog = (req, res) => {

    const doctor_id = req.params.id

    const { article_title, article_body, image_url } = req.body
    const query = `INSERT INTO blog (article_title, article_body, image_url, doctor_id, created_time )
    VALUES ($1, $2, $3, $4, $5 )
    RETURNING *;`
    const data = [article_title, article_body, image_url, doctor_id, new Date()]
    pool
        .query(query, data)
        .then((result) => {
            res.status(200).json({
                success: true,
                message: 'blog added successfully',
                blog: result.rows[0]
            })
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                message: 'server error',
                error: error.message
            })
        })
};
const getAllAricleBlog = (req, res) => {
    const query = `SELECT *  FROM  blog `
    pool
        .query(query)
        .then((result) => {
            res.status(200).json({
                success: true,
                message: "All blogs ",
                result: result.rows
            })
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                message: "server Error",
                error: error.message
            })
        })
}


const getAllAricleBlogById = (req, res) => {
    const id = req.params.id;

    const query = `
        SELECT * FROM blog
        WHERE id = $1;
    `;

    const data = [id];

    pool
        .query(query, data)
        .then((result) => {
            if (result.rows.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: `No blogs found for doctor with id: ${doctor_id}`,
                });
            }
            res.status(200).json({
                success: true,
                message: `Blogs retrieved successfully  with id: ${id}`,
                blogs: result.rows
            });
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                message: 'Server error',
                error: error.message
            });
        });
}
const updateBlogById = (req, res) => {
    const id = req.params.id;
    let { article_title, article_body, image_url } = req.body;
    const query = `UPDATE blog 
        SET article_title = $1, article_body = $2, image_url = $3
        WHERE id = $4
        RETURNING *;`

    const data = [article_title, article_body, image_url, id];

    pool
        .query(query, data)
        .then((result) => {
            if (result.rows.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: `Blog with id: ${id} not found`,
                });
            }
            res.status(200).json({
                success: true,
                message: `Blog with id: ${id} updated successfully`,
                result: result.rows[0]
            });

        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                message: 'Server error',
                error: error.message,
            });
        })
}
const deleteBlogById = (req, res) => {
    const id = req.params.id;
    const query = `UPDATE blog SET is_deleted=1 WHERE id=$1;`;
    const data = [id];
    pool
        .query(query, data)
        .then((result) => {
            if (result.rowCount !== 0) {
                res.status(200).json({
                    success: true,
                    message: `blog with id: ${id} deleted successfully`,
                });
            } else {
                throw new Error('Error happened while deleting article');
            }
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                message: 'Server error',
                error: error.message,
            });
        });
}
module.exports = {
    postNewBlog,
    getAllAricleBlog,
    getAllAricleBlogById,
    updateBlogById,
    deleteBlogById
}