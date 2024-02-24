/* eslint-disable import/no-extraneous-dependencies */
// middleware de autenticação
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../entities/models/User.js';

dotenv.config({ path: '.env' });

const secretKey = process.env.JWT_SECRET;

async function authenticateToken(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(400).json({ message: 'Missing authentication token.' });
    return;
  }

  const [, token] = authorization.split(' '); // separando o Bearer do token lá do headers do postman

  try {
    // eslint-disable-next-line consistent-return
    jwt.verify(token, secretKey, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid Token.' });
      }
      // Decodificou com sucesso o token, podemos armazenar o ID do usuário para uso posterior se necessário
      req.id = decoded.id;
      req.email = decoded.email;
      const { email } = req;
      const verifyUser = await User.findOne({
        where: { email },
      });
      if (!verifyUser) {
        return res.status(404).json({ message: 'User not found.' });
      }
      const user = {
        id: req.id,
        email: req.email,
      };
      req.user = user;
      next();
    });
  } catch (error) {
    res.status(500).json({ message: `Token error: ${error.message}` });
  }
}

export default authenticateToken;
