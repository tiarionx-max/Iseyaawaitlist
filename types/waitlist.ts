export type WaitlistStatus = "idle" | "loading" | "success" | "duplicate" | "error";

export interface WaitlistApiResponse {
  status: "success" | "duplicate" | "error";
  message: string;
}
