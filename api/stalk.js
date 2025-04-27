export default async function handler(req, res) {
  const { username } = req.query;

  if (!username) {
    return res.status(400).json({ status: false, message: "Username tidak ditemukan" });
  }

  try {
    const response = await fetch(`https://api.siputzx.my.id/api/stalk/tiktok?username=${username}`);
    const data = await response.json();
    res.status(200).json(data); // balikin response API apa adanya
  } catch (error) {
    res.status(500).json({ status: false, message: "Gagal mengambil data", error: error.message });
  }
}
