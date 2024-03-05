import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User.js';

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '1h',
    }
  );
};

const authService = {
  signup: async (name, email, password) => {
    try {
      const alreadyUser = await User.findOne({ email });

      if (alreadyUser) {
        return { success: false, message: "User already exists!" };
      } else {
        const newUser = new User({
          name,
          email,
          password,
        });
        
        await newUser.save();

        return {success:true};
      }
    } catch (error) {
      console.error(error);
      return { success: false, message: 'Internal Server Error' };
    }
  },

  login: async (email, password) => {
    try {
      const user = await User.findOne({ email });

      if (!user) {
        return { success: false, message: 'Invalid credentials' };
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return { success: false, message: 'Invalid credentials' };
      }

      const token = generateToken(user);

      return {success: true, message: 'Login successful', token };
    } catch (error) {
      console.error(error);
      return { success: false, message: 'Internal Server Error' };
    }
  },
};

export default authService;
