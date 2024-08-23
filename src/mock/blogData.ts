import ReactImg from '../../public/react.png'; // Replace with your image path

export const blogData = Array.from({ length: 50 }, (_, index) => ({
  title: `Blog Post Title ${index + 1}`,
  description: `The evolution of technology has been a remarkable journey, profoundly transforming every aspect of human life. From the early days of the industrial revolution to the rapid advancements of the digital age, technology has continuously reshaped how we live, work, and interact. The advent of steam engines, electricity, and telecommunications marked significant milestones in technological progress. These innovations laid the groundwork for the modern era, enabling unprecedented levels of productivity and connectivity.

In the 20th century, the rise of computers and the internet revolutionized the world, ushering in the information age. Personal computers became commonplace, and the internet connected people across the globe, facilitating the exchange of information and ideas at an unprecedented scale. This digital transformation led to the development of new industries, such as software development and e-commerce, and transformed traditional sectors like manufacturing and services.

As technology continues to advance, we are witnessing the emergence of cutting-edge fields such as artificial intelligence, machine learning, and blockchain. These technologies are not only enhancing our capabilities but also introducing new challenges and ethical considerations. Artificial intelligence, for instance, is revolutionizing industries by automating tasks, analyzing vast amounts of data, and enabling new forms of human-computer interaction. However, it also raises questions about job displacement, privacy, and the future of human decision-making.

Machine learning, a subset of artificial intelligence, is driving innovations in various domains, including healthcare, finance, and transportation. By leveraging algorithms and large datasets, machine learning models can make predictions, identify patterns, and optimize processes. This has led to advancements in personalized medicine, fraud detection, and autonomous vehicles, among other areas. Nonetheless, the reliance on data-driven decision-making also highlights the need for robust data governance and ethical considerations to ensure fairness and transparency.

Blockchain technology, initially popularized by cryptocurrencies like Bitcoin, is gaining traction for its potential to enhance security, transparency, and efficiency in various applications. Its decentralized nature and immutable ledger make it an attractive solution for applications such as supply chain management, digital identity verification, and smart contracts. As organizations explore blockchain's potential, they are also navigating challenges related to scalability, interoperability, and regulatory compliance.

The rapid pace of technological advancement presents both opportunities and challenges. On one hand, technology has the power to drive economic growth, improve quality of life, and address global issues such as climate change and healthcare access. On the other hand, it also raises concerns about ethical implications, social inequality, and the potential for unintended consequences. As we look to the future, it is crucial to balance innovation with responsibility, ensuring that technology serves the greater good and aligns with societal values.

The role of technology in shaping our future is undeniable, and its impact will continue to evolve as new breakthroughs and applications emerge. Embracing technological advancements while addressing their associated challenges will be key to fostering a positive and inclusive technological future. By promoting collaboration, ethical practices, and responsible innovation, we can harness the power of technology to create a better world for generations to come.`,
  image: ReactImg, // Replace with your image path
  user: {
    name: `User ${index + 1}`,
    likes: `${Math.floor(Math.random() * 50) + 1}k`
  }
}));
