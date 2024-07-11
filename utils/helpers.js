module.exports = {
    format_timestamp: (author, timestamp) => {
            return `Posted by ${author.username} on ${timestamp.toLocaleDateString()}`;
    },
};
