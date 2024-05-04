export const handleChatMessage = async (req, res) => {
    const { message } = req.body;
    const userId = req.user._id; // Assuming user is authenticated and user._id is available
   
    // Simulate processing the message and generating a response
    const response = `You said: ${message}`;
   
    try {
       // Here, you would send the response back to the user, e.g., through a WebSocket connection
       res.status(200).json({ response });
    } catch (error) {
       res.status(500).send('Failed to process chat message');
    }
   };
   export default { handleChatMessage} ;