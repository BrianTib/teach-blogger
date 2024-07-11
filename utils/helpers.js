module.exports = {
    format_date: (date) => {
        return date.toLocaleDateString();
    },
    format_author_timestamp: (author, timestamp) => {
        return `Posted by ${author.username} on ${timestamp.toLocaleDateString()}`;
    },
};
