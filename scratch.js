const https = require('https');
const options = { headers: { 'User-Agent': 'Mozilla/5.0' } };
const fetchAndExtract = (url, prefix) => {
  https.get(url, options, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const regex = new RegExp(prefix + '[a-zA-Z0-9-]+', 'g');
      const matches = data.match(regex);
      if (matches) console.log(url + ' => ' + [...new Set(matches)].slice(0, 3).join('\n'));
      else console.log(url + ' => no matches');
    });
  });
};
fetchAndExtract('https://unsplash.com/s/photos/industrial-pipe', 'https://images.unsplash.com/photo-');
fetchAndExtract('https://unsplash.com/s/photos/pvc-pipe', 'https://images.unsplash.com/photo-');
fetchAndExtract('https://unsplash.com/s/photos/valve', 'https://images.unsplash.com/photo-');
