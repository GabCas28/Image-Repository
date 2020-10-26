class Rating {
  id;
  username;
  stars;
  is_liked;
  constructor(
    id = undefined,
    username = undefined,
    stars: Number = -1,
    is_liked: Boolean = false
  ) {}

  save() {}
  read() {}
  update() {}
  delete() {}
}
