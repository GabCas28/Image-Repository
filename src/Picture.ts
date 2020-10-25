class Picture {
    id;
    username;
    title;
    description;
    constructor(id = 0, username = 0, title: String = '', description: String = '') {
        this.id = id;
        this.username = username;
        this.title = title;
        this.description = description;
    }
    getId() {
        return true;
    }
    getUsername() {
        return true;
    }
    setUsername(username) {
        return username
    }
    getTitle() {
        return true;
    }
    setTitle(title) {
        return title;
    }
    getDescription() {
        return true;
    }
    setDescription(description) {
        return description;
    }
    save() {
        return true;
    };
    delete() {
        return true;
    };
}