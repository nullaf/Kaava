export default (req, res) => {
  res.statusCode = 200;
  res.json({
    posts: {
      post: [
        {
          id: "3",
          title: "I need help for my pet",
          likeCount: "0",
          commentCount: "0",
          date: "Mon Nov 16 2020 09:57:16 GMT+0300 (GMT+03:00)",
        },
        {
          id: "2",
          title: "I love my cat",
          likeCount: "2",
          commentCount: "0",
          date: "Mon Nov 15 2020 11:57:16 GMT+0300 (GMT+03:00)",
        },
        {
          id: "1",
          title: "My dog is acting weird",
          likeCount: "5",
          commentCount: "1",
          date: "Mon Nov 14 2020 07:57:16 GMT+0300 (GMT+03:00)",
        },
      ],
    },
  });
};
