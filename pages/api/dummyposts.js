export default (req, res) => {
  res.statusCode = 200;
  res.json({
    forum: {
      posts: [
        {
          id: "6",
          title: "Consectetur adipiscing elit",
          content:
            "Sed pulvinar proin gravida hendrerit. In vitae turpis massa sed elementum tempus egestas. Arcu odio ut sem nulla pharetra. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.",
          likeCount: "1",
          comments: [],
          date: "Mon Nov 17 2020 09:57:16 GMT+0300 (GMT+03:00)",
        },
        {
          id: "5",
          title: "Euismod in pellentesque massa placerat duis ultricies",
          content:
            "Amet est placerat in egestas erat imperdiet sed euismod. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Non tellus orci ac auctor augue. Scelerisque varius morbi enim nunc faucibus a pellentesque.",
          likeCount: "2",
          comments: [
            "Turpis tincidunt id aliquet risus feugiat in ante metus dictum.",
          ],
          date: "Mon Nov 10 2020 11:57:16 GMT+0300 (GMT+03:00)",
        },
        {
          id: "4",
          title: "Magna sit amet purus gravida quis blandit turpis",
          content:
            "Et pharetra pharetra massa massa ultricies mi quis. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed. Scelerisque in dictum non consectetur a erat nam. Gravida arcu ac tortor dignissim convallis.",
          likeCount: "5",
          comments: [
            "Amet mauris commodo quis imperdiet massa tincidunt nunc.",
          ],
          date: "Mon Nov 6 2020 07:57:16 GMT+0300 (GMT+03:00)",
        },
        {
          id: "3",
          title: "Viverra ipsum nunc aliquet bibendum enim",
          content:
            "Malesuada pellentesque elit eget gravida. Sem et tortor consequat id. Odio euismod lacinia at quis risus sed vulputate. Non arcu risus quis varius quam quisque id diam. Faucibus nisl tincidunt eget nullam non.",
          likeCount: "0",
          commentCount: "2",
          comments: [
            "Sed euismod nisi porta lorem mollis.",
            "Erat pellentesque adipiscing commodo elit. Tristique nulla aliquet enim tortor at auctor urna nunc.",
          ],
          date: "Mon Nov 1 2020 09:57:16 GMT+0300 (GMT+03:00)",
        },
        {
          id: "2",
          title: "Libero id faucibus nisl tincidunt eget nullam",
          content:
            "A pellentesque sit amet porttitor eget dolor morbi. A pellentesque sit amet porttitor eget dolor morbi. Elementum nibh tellus molestie nunc non blandit massa. Lacus luctus accumsan tortor posuere. Odio ut sem nulla pharetra diam sit amet nisl. Commodo nulla facilisi nullam vehicula ipsum a.",
          likeCount: "2",
          comments: [
            "Quam vulputate dignissim suspendisse in est..",
            "Proin nibh nisl condimentum id venenatis a condimentum.",
          ],
          date: "Mon Nov 1 2020 11:57:16 GMT+0300 (GMT+03:00)",
        },
        {
          id: "1",
          title: "Orci eu lobortis elementum nibh tellus molestie nunc non",
          content:
            "Morbi tincidunt augue interdum velit euismod in pellentesque massa. Molestie nunc non blandit massa enim. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et.",
          likeCount: "1",
          comments: [
            "Quis blandit turpis cursus in hac.",
            "Donec massa sapien faucibus et.",
            "Eget est lorem ipsum dolor sit amet.",
          ],
          date: "Mon Nov 1 2020 8:57:16 GMT+0300 (GMT+03:00)",
        },
      ],
    },
  });
};
