class Review {
    id;
    username;
    title;
    content;
    constructor(id = '', username = '', title: String = '', content: String = '') {
        this.id = id;
        this.username = username;
        this.title = title;
        this.content = content;
    }
    getId() {
        return true;
    }
    getUsername() {
        return true;
    }
    setUsername(username) {
        return username;
    }
    getTitle() {
        return true;
    }
    setTitle(title) {
        return title;
    }
    getContent() {
        return true;
    }
    setContent(content) {
        return content
    }
    save() {
        return true;
    };
    delete() {
        return true;
    };
}