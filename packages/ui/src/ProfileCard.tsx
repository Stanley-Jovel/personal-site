import { Avatar, Anchor, Button, H1, Paragraph, XStack, YStack } from '@my/ui'
import { Linkedin, Github } from '@tamagui/lucide-icons'

export const ProfileCard = () => {
  return (
    <YStack
      borderLeftColor={'$color.gray4Light'}
      borderRightColor={'$color.gray4Light'}
      blw="$0.5"
      brw="$0.5"
      maw={800}
      f={1}
      jc="center"
      ai="center"
      gap="$5"
      p="$12"
      bg="$color.gray1Light"
    >
      <Avatar circular size="$15">
        <Avatar.Image source={{ uri: '/picture.png' }} />
      </Avatar>
      <YStack gap="$1">
        <H1 ta="center" col="$color12">
          Stanley Jovel
        </H1>
        <Paragraph col="$color10" ta="center">
          Full Stack and AI Engineer
        </Paragraph>
        <XStack gap="$1" jc="center">
          <Anchor h="$3" href="https://www.linkedin.com/in/luisjovel/" target="_blank">
            <Button alignSelf="center" icon={Linkedin} chromeless size="$5" p="$3" />
          </Anchor>

          <Anchor h="$3" href="https://github.com/Stanley-Jovel" target="_blank">
            <Button alignSelf="center" icon={Github} chromeless size="$5" p="$3" />
          </Anchor>
        </XStack>
      </YStack>
    </YStack>
  )
}
