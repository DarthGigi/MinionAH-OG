import { formatNumber } from "~/lib/utilities";
import type { ReactElement } from "react";

export const MinionTemplate = ({
  minion,
  coinImageData,
  romanNumerals
}: {
  minion: {
    minion: {
      id: string;
      name: string;
      generator_tier: number;
    };
    user: {
      id: string;
      username: string;
    };
    price: number;
    amount: number | null;
  };
  coinImageData: ArrayBuffer;
  romanNumerals: boolean;
}): ReactElement => {
  return (
    <div tw="flex h-full w-full flex-col items-center justify-center bg-[#171717]">
      <div tw="flex w-full max-w-xl flex-col rounded-lg border border-neutral-700 bg-neutral-800 shadow">
        <div tw="mx-auto flex flex-col items-center rounded py-10">
          <div tw="flex mb-3 items-center h-44 w-44 shadow-lg overflow-hidden justify-center rounded-full bg-neutral-700">
            <img tw="h-full w-full p-4" src={`https://res.cloudinary.com/minionah/image/upload/v1/users/avatars/${minion.user.id}`} />
          </div>
          <span tw="text-4xl font-medium text-white">{minion.user.username}</span>
        </div>
        <div tw="flex w-full flex-col items-center justify-center rounded">
          <div tw="flex h-24 w-24 rounded-full bg-neutral-700 p-1">
            <img tw="h-full w-full" src={`https://res.cloudinary.com/minionah/image/upload/v1/minions/head/${minion.minion.id}`} />
          </div>
          <span tw="text-3xl mt-3 font-medium text-white">{minion.minion.name.replace(/ [IVX]+$/, "")}</span>
          <div tw="mx-auto mt-4 flex w-full items-center justify-center border-t border-neutral-700">
            <div tw="relative flex w-0 flex-1 items-center justify-center overflow-hidden text-2xl font-medium text-neutral-200">
              <span tw="flex-shrink-0 rounded-full bg-neutral-400 px-3 py-0.5 text-2xl font-medium text-neutral-800">{romanNumerals ? `Tier ${["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"][minion.minion.generator_tier - 1]}` : `Tier ${minion.minion.generator_tier}`}</span>
            </div>
            <div tw="relative border-l border-r border-neutral-700 -ml-px flex w-0 flex-1 overflow-hidden">
              <span tw="relative w-0 flex-1 items-center justify-center overflow-hidden py-4 text-2xl font-medium text-neutral-200">
                <img tw="absolute left-4 h-10 w-10" src={`data:image/png;base64,${btoa(String.fromCharCode(...new Uint8Array(coinImageData)))}`} />
                <div tw="flex flex-col justify-center items-center">
                  {formatNumber(minion.price)}
                  {minion.amount! > 1 && (
                    <div tw="flex">
                      <span tw="ml-1 text-2xl text-neutral-200/50">/</span>
                      <span tw="text-2xl text-neutral-200/50">each</span>
                    </div>
                  )}
                </div>
              </span>
            </div>
            <div tw="relative flex w-0 flex-1 items-center justify-center text-sm font-medium text-neutral-200">
              <span tw="flex-shrink-0 rounded-full bg-neutral-400 px-3 py-0.5 text-2xl font-medium text-neutral-800">{` Amount: ${minion.amount}`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
