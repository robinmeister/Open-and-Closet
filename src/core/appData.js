import { LoremIpsum } from 'lorem-ipsum'
import faker, { lorem } from 'faker'
faker.seed(10)
const fakerData = [...Array(30).keys()].map((_, i) => {
  return {
    key: faker.datatype.uuid(),
    image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
      'women',
      'men',
    ])}/${faker.datatype.number(60)}.jpg`,
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    email: faker.internet.email(),
  }
})

export const appData = {
  items: [
    {
      key: 0,
      name: 'T-shirt 1',
      occasion: 'Outdoors',
      category: 'T-Shirt',
      notes:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
      image:
        'https://images.pexels.com/photos/6046231/pexels-photo-6046231.jpeg?auto=compress',
    },
    {
      key: 1,
      name: 'White T-shirt',
      occasion: 'T-Shirt',
      category: 'Hemd',
      notes:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
      image:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      key: 2,
      name: 'Hoodie 1',
      occasion: 'Outdoors',
      category: 'Sonstiges',
      notes:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
      image:
        'https://media.istockphoto.com/photos/mens-black-blank-hoodie-templatefrom-two-sides-natural-shape-on-for-picture-id1177415728?b=1&k=20&m=1177415728&s=170667a&w=0&h=GvZNvnEdoUjfWIiGp6Bz-SNbappi5q0bnQDFeORnoW4=',
    },
    {
      key: 3,
      name: 'Hoodie 2',
      occasion: 'Outdoors',
      category: 'Sonstiges',
      notes:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
      image:
        'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9vZGllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      key: 4,
      name: 'First Jacket',
      occasion: 'Outdoors',
      category: 'Jacke',
      notes:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
      image:
        'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      key: 5,
      name: 'fifth item',
      occasion: 'Outdoors',
      category: 'Sonstiges',
      notes:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
      image:
        'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJvdXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      key: 6,
      name: 'Trousers 1',
      occasion: 'Outdoors',
      category: 'Hose',
      notes:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
      image:
        'https://images.unsplash.com/photo-1493357335960-4583bfa6f8d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRyb3VzZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      key: 7,
      name: 'Shirt 1',
      occasion: 'Outdoors',
      category: 'Hemd',
      notes:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
      image:
        'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
  ],

  outfits: [],
  posts: [
    {
      key: 0,
      avatar: fakerData[0].image,
      name: fakerData[0].name,
      text: new LoremIpsum({
        sentencesPerParagraph: {
          max: 8,
          min: 4,
        },
        wordsPerSentence: {
          max: 16,
          min: 4,
        },
      }).generateSentences(2),
      title: 'Influencer',
      image:
        'https://images.pexels.com/photos/5262872/pexels-photo-5262872.jpeg?auto=compress',
      likes: '10k',
      height: 250,
    },
    {
      key: 1,
      avatar: fakerData[1].image,
      name: fakerData[1].name,
      text: new LoremIpsum({
        sentencesPerParagraph: {
          max: 8,
          min: 4,
        },
        wordsPerSentence: {
          max: 16,
          min: 4,
        },
      }).generateSentences(2),
      title: 'Influencer',
      image:
        'https://images.pexels.com/photos/6311650/pexels-photo-6311650.jpeg?auto=compress',
      likes: '9k',
      height: 250,
    },
    {
      key: 2,
      avatar: fakerData[2].image,
      name: fakerData[2].name,
      text: new LoremIpsum({
        sentencesPerParagraph: {
          max: 8,
          min: 4,
        },
        wordsPerSentence: {
          max: 16,
          min: 4,
        },
      }).generateSentences(2),
      title: 'Influencer',
      image:
        'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress',
      likes: '9k',
      height: 500,
    },
    {
      key: 3,
      avatar: fakerData[3].image,
      name: fakerData[3].name,
      text: new LoremIpsum({
        sentencesPerParagraph: {
          max: 8,
          min: 4,
        },
        wordsPerSentence: {
          max: 16,
          min: 4,
        },
      }).generateSentences(2),
      title: 'Influencer',
      image:
        'https://images.pexels.com/photos/6776724/pexels-photo-6776724.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      likes: '8k',
      height: 500,
    },
    {
      key: 4,
      avatar: fakerData[22].image,
      name: fakerData[22].name,
      text: new LoremIpsum({
        sentencesPerParagraph: {
          max: 8,
          min: 4,
        },
        wordsPerSentence: {
          max: 16,
          min: 4,
        },
      }).generateSentences(2),
      title: 'Influencer',
      image:
        'https://images.pexels.com/photos/8612511/pexels-photo-8612511.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      likes: '7k',
      height: 500,
    },
    {
      key: 5,
      avatar: fakerData[5].image,
      name: fakerData[5].name,
      text: new LoremIpsum({
        sentencesPerParagraph: {
          max: 8,
          min: 4,
        },
        wordsPerSentence: {
          max: 16,
          min: 4,
        },
      }).generateSentences(2),
      title: 'Influencer',
      image:
        'https://images.pexels.com/photos/4114937/pexels-photo-4114937.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      likes: '6k',
      height: 450,
    },
  ],
}
