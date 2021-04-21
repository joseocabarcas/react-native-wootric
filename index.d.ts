declare module '@wootric/react-native-wootric' {
  export function configureWithClientID(
    wootricClientID: string,
    wootricToken: string
  ): void;

  export function setEndUserEmail(email: string): void;

  export function setEndUserCreatedAt(date: string): void;

  export function setEndUserExternalId(id: string): void;

  export function setEndUserPhoneNumber(phone: string): void;

  export function setEndUserProperties(data: object): void;

  export function showOptOut(show: boolean): void;

  export function setFirstSurveyAfter(num: number): void;

  export function setCustomLanguage(lang: string): void;

  export function setCustomProductName(name: string): void;

  export function setCustomAudience(audience: string): void;

  export function showSurvey(): void;
}