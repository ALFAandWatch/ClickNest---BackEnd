interface IUser {
   name: string;
   email: string;
   phone: string;
   id: number;
   role: string;
   credential: {
      password: string;
      id: number;
   };
}

export default IUser;
