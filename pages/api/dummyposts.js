export default (req, res) => {
  res.statusCode = 200;
  res.json({
    posts: {
      post: [
        {
          id: "6",
          title: "Love this website :)",
          content:
            "Sed pulvinar proin gravida hendrerit. In vitae turpis massa sed elementum tempus egestas. Arcu odio ut sem nulla pharetra. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.",
          likeCount: "1",
          commentCount: "0",
          date: "Mon Nov 17 2020 09:57:16 GMT+0300 (GMT+03:00)",
        },
        {
          id: "5",
          title: "I love kaava",
          content:
            "Amet est placerat in egestas erat imperdiet sed euismod. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.",
          likeCount: "2",
          commentCount: "0",
          date: "Mon Nov 10 2020 11:57:16 GMT+0300 (GMT+03:00)",
        },
        {
          id: "4",
          title: "Which food do you prefer for your dog",
          content:
            "Et pharetra pharetra massa massa ultricies mi quis. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed.",
          likeCount: "5",
          commentCount: "1",
          date: "Mon Nov 6 2020 07:57:16 GMT+0300 (GMT+03:00)",
        },
        {
          id: "3",
          title: "I need help for my pet",
          content:
            "Malesuada pellentesque elit eget gravida. Sem et tortor consequat id. Odio euismod lacinia at quis risus sed vulputate. Non arcu risus quis varius quam quisque id diam.",
          likeCount: "0",
          commentCount: "0",
          date: "Mon Nov 1 2020 09:57:16 GMT+0300 (GMT+03:00)",
        },
        {
          id: "2",
          title: "I love my cat",
          content:
            "A pellentesque sit amet porttitor eget dolor morbi. A pellentesque sit amet porttitor eget dolor morbi. Elementum nibh tellus molestie nunc non blandit massa. Lacus luctus accumsan tortor posuere. Odio ut sem nulla pharetra diam sit amet nisl. Commodo nulla facilisi nullam vehicula ipsum a.",
          likeCount: "2",
          commentCount: "0",
          date: "Mon Nov 1 2020 11:57:16 GMT+0300 (GMT+03:00)",
        },
      ],
    },
  });
};
