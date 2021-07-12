import fs from "fs";
import matter from "gray-matter";
import remark from "remark";
import remarkHTML from "remark-html";

export function getAllPosts() {
    const filenames = fs.readdirSync('./_posts');
    const posts = filenames.map(file => {
        const _content = fs.readFileSync(`./_posts/${file}`, 'utf8').toString();
        const { content, data: metadata} = matter(_content);
        const html = remark().use(remarkHTML).processSync(content).toString();
        return {
            metadata:{
                ...metadata,
                slug: file.replace('.md', ''),
            },
            content: html
        }
    })
    return posts;
}