export type RootStackParamList = {
  HomeStack: undefined;
};

export type HomeStackParamList = {
  HomeScreen: undefined;
  ResultScreen: {
    bmi: number;
    gender: string;
    age: number;
    height: number;
    weight: number;
  };
};
