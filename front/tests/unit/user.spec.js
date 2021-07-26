import user from '@/store/modules/user';

describe('user state', () => {
  it('initial state of user is empty', () => {
    const name = user.state.name;
    expect(name).toBe('');

    const birthday = user.state.birthday;
    expect(birthday).toBe('');

    const city = user.state.city;
    expect(city).toBe('');

    const personalRegister = user.state.personalRegister;
    expect(personalRegister).toBe('');

    const email = user.state.email;
    expect(email).toBe('');

    const password = user.state.password;
    expect(password).toBe('');

    const id = user.state.id;
    expect(id).toBe('');

    const date = user.state.date;
    expect(Object.keys(date).length).toBe(0);
  });

  it('set state of user', () => {
    const date = new Date();
    const newUser = {
      date,
      name: 'Adão',
      birthday: '21/02/1785',
      city: 'Bugakan',
      personalRegister: '187.485.874-99',
      email: 'adao@bugakan.com',
      password: 'adãoeummob',
      _id: 'opagangnamstyle',
    }

    user.mutations.setName(user.state, newUser.name);
    expect(user.state.name).toBe(newUser.name);

    user.mutations.setBirthday(user.state, newUser.birthday);
    expect(user.state.birthday).toBe(newUser.birthday);

    user.mutations.setCity(user.state, newUser.city);
    expect(user.state.city).toBe(newUser.city);

    user.mutations.setPersonalRegister(user.state, newUser.personalRegister);
    expect(user.state.personalRegister).toBe(newUser.personalRegister);

    user.mutations.setEmail(user.state, newUser.email);
    expect(user.state.email).toBe(newUser.email);

    user.mutations.setPassword(user.state, newUser.password);
    expect(user.state.password).toBe(newUser.password);

    user.mutations.setId(user.state, newUser.id);
    expect(user.state.id).toBe(newUser.id);

    user.mutations.setDate(user.state, newUser.date);
    expect(user.state.date).toBe(newUser.date);
  });
});

