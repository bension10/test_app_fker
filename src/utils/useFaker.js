
import faker from 'faker';

export const generateProfile = () => {
  let fakeProfile = [];
  for( let x = 0; x < 10; x++ ){
    fakeProfile.push({
      email: faker.fake("{{internet.email}}"),
      jobTitle: faker.fake("{{name.jobTitle}}"),
      countryCode: faker.fake("{{address.countryCode}}"),
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      avatar: faker.fake("{{image.avatar}}")
    })
  }

  return fakeProfile;
}