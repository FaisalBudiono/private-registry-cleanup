'use client'

import { Button, InputText, Label } from '@common/components'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div className="flex basis-9/12 items-center justify-center space-x-2">
        <Label
          className="basis-2/12 align-middle"
          htmlFor="reg-url"
          isClickable
        >
          Registry URL:
        </Label>
        <InputText
          id="reg-url"
          prefix="https://"
          suffix="/v2/_catalog"
          className="basis-full"
          placeholder="reg.docker.com"
        />
        <Button className="basis-2/12">Fetch</Button>
      </div>
    </main>
  )
}
