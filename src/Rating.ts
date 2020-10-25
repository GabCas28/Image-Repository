class Rating {
    id;
    username;
    stars;
    is_liked;
    constructor(id = "", username = '', stars: Number = -1, is_liked: Boolean = false) {
        this.id = id;
        this.username = username;
        this.stars = stars;
        this.is_liked = is_liked;
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
    getStars() {
        return true;
    }
    getIsLiked() {
        return true;
    }
    setIsLiked(is_liked) {
        return is_liked;
    }
    save() {
        return true;
    };
    delete() {
        return true;
    };
}