export async function SignUp(req, res) {
  try {
    const { test } = req.body
    console.log({ test, bug: 'BUG' })
    res.status(200).json({
      success: true,
      message: 'Test passed successfully',
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Registration functionality is not available at the moment . Please try again after sometime .',
    })
  }
}
