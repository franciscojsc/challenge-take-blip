const axios = require("axios");
const URL_BASE = "https://api.github.com/orgs";

module.exports = async (req, res) => {
  try {
    const { username } = req.params;

    const language = req.query.language || "C#";
    const limit = +req.query.limit || 5;

    const { data } = await axios.get(`${URL_BASE}/${username}/repos`);

    return res.status(200).json(
      data
        .filter((item) => item.language === language)
        .sort(compareDate)
        .map((item) => {
          return {
            name: item.full_name,
            description: item.description,
            avatar: item.owner.avatar_url,
          };
        })
        .slice(0, limit)
    );
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Server with problem, enter in contact with support" });
  }
};

function compareDate(a, b) {
  return a.created_at < b.created_at;
}
