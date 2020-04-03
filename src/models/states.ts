export type RootState = Readonly<{
  app: AppState;
}>;

export type AppState = Readonly<{
  readonly test: boolean;
}>;
