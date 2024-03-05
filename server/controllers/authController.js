import authService from '../services/authServices.js';

const authController = {

    signup: async (req, res) => {
        try {

            const { name, email, password } = req.body;
            const response = await authService.signup(name, email, password);

            if (response.success) {
                res.status(201).json({success:true,  message: 'Signup successful'});
            }
            else {
                res.status(500).json({success:false, message: response.message });
            }

        } catch (error) {
            res.status(500).json({ success:false, message: response.message  });
        }
    },

    
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const response = await authService.login(email, password);
            if (response.success) {
                res.status(200).json({success:true, message: 'Login successful', token: response.token });
            }
            else {
                res.status(500).json({ success:false, message: response.message });
            }

        } catch (error) {
            res.status(500).json({ success:false, message: 'Internal Server Error' });
        }
    },
};

export default authController;
