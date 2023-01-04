const crypto = require('crypto');

const algorithm = 'aes-256-ctr';
const secretKey = 'd552c8f42719d0359ce81bebafe849e7';

const encrypt = text => {
  const iv = crypto.randomBytes(16);

  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

  const hashString = `${iv.toString('hex')}-${encrypted.toString('hex')}`;

  return hashString;
};

const decrypt = hashString => {
  const [iv, content] = hashString.split('-');

  const hash = { iv, content };

  const decipher = crypto.createDecipheriv(
    algorithm,
    secretKey,
    Buffer.from(hash.iv, 'hex'),
  );

  const decrpyted = Buffer.concat([
    decipher.update(Buffer.from(hash.content, 'hex')),
    decipher.final(),
  ]);

  return decrpyted.toString();
};

module.exports = {
  encrypt,
  decrypt,
};
