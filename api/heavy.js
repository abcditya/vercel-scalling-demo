export default function handler(req, res) {
  // Simulasi proses berat
  const start = Date.now();
  while (Date.now() - start < 5000) {
    // Loop selama 5 detik
    Math.sqrt(Math.random());
  }

  res.status(200).json({ message: "Heavy computation finished!" });
}
