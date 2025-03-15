# Pango

**Pango** is an AI-powered social media assistant designed to help professionals maintain a consistent and engaging online presence with minimal effort. By integrating with platforms like Telegram, LinkedIn, and Instagram, Pango automates the creation and scheduling of social media posts, allowing users to focus on their core tasks without neglecting their digital footprint.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Connecting Accounts](#connecting-accounts)
  - [Setting Preferences](#setting-preferences)
  - [Reviewing and Approving Posts](#reviewing-and-approving-posts)
- [Privacy and Security](#privacy-and-security)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- **AI-Generated Content**: Leverages advanced AI to create engaging posts based on your Telegram conversations.
- **Multi-Platform Support**: Seamlessly integrates with LinkedIn and Instagram for direct posting.
- **Customizable Tone**: Choose from various tones—Professional, Casual, Witty, or Marketing-style—to match your brand's voice.
- **Manual Approval**: Option to manually approve each post before it goes live.
- **Scheduling**: Set preferred posting times for consistent engagement.
- **Privacy Controls**: AI respects privacy settings, ensuring sensitive information is excluded.

## Getting Started

### Prerequisites

- **Node.js** (version 14.x or higher)
- **npm** (version 6.x or higher)
- **Telegram Account**
- **LinkedIn and/or Instagram Account**

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/pango.git
   cd pango
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add your API keys and configuration settings:
     ```
     TELEGRAM_API_KEY=your_telegram_api_key
     LINKEDIN_API_KEY=your_linkedin_api_key
     INSTAGRAM_API_KEY=your_instagram_api_key
     ```

4. **Start the Application**:
   ```bash
   npm start
   ```

## Usage

### Connecting Accounts

- **Telegram**: On first launch, Pango will prompt you to connect your Telegram account. Follow the on-screen instructions to authorize access.
- **LinkedIn and Instagram**: Navigate to the 'Settings' section to link your social media accounts. Authentication is handled securely via OAuth.

### Setting Preferences

- **Tone Selection**: Choose your preferred tone from the options available in the 'Settings' menu.
- **Posting Schedule**: Set your desired posting times to ensure content is shared at optimal moments.

### Reviewing and Approving Posts

- **Daily Review**: Pango generates draft posts based on your recent Telegram conversations.
- **Approval Options**:
  - **Approve & Post**: Immediately share the post.
  - **Edit & Post**: Modify the content before sharing.
  - **Schedule for Later**: Choose a specific time for the post to go live.
  - **Reject**: Discard the suggested post.

## Privacy and Security

Pango is committed to protecting your privacy:

- **Data Access**: Only authorized conversations are accessed, and data is processed locally when possible.
- **Manual Approval**: No content is posted without your explicit consent.
- **Exclusion Filters**: Customize keywords and phrases to be excluded from posts.

## Contributing

We welcome contributions from the community:

1. **Fork the Repository**: Click the 'Fork' button at the top right of this page.
2. **Create a New Branch**: Use a descriptive name for your branch.
3. **Make Changes**: Implement your features or fixes.
4. **Submit a Pull Request**: Ensure you provide a clear description of your changes.

Please refer to our [Contributing Guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **NEAR Protocol**: For providing a decentralized platform that ensures data privacy and security.
- **Community Contributors**: Thank you to everyone who has contributed to the development and improvement of Pango.

```

