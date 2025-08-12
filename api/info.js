export default function handler(req, res) {
  const info = {
    serverTime: new Date().toISOString(),
    platform: process.platform,
    nodeVersion: process.version
  };
  
  res.status(200).json(info);
}
