
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-6">
        <Avatar className="h-16 w-16">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <div className="text-xl font-bold">John Doe</div>
          <div className="text-muted-foreground">Software Engineer at Acme Inc.</div>
        </div>
        <Button variant="outline" className="ml-auto">
          Edit Profile
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
        <div>
          <div className="mb-6">
            <h2 className="text-lg font-semibold">Activity Feed</h2>
            <div className="grid gap-4">
              <Card>
                <CardHeader className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-0.5">
                    <div className="font-medium">John Doe</div>
                    <div className="text-xs text-muted-foreground">Posted 2 hours ago</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    Excited to share my latest project with the community! Check it out and let me know what you think.
                  </p>
                </CardContent>
                <CardFooter className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <HeartIcon className="h-4 w-4" />
                    <span className="sr-only">Like</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MessageCircleIcon className="h-4 w-4" />
                    <span className="sr-only">Comment</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <ShareIcon className="h-4 w-4" />
                    <span className="sr-only">Share</span>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-0.5">
                    <div className="font-medium">John Doe</div>
                    <div className="text-xs text-muted-foreground">Commented 1 day ago</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>Great work on the new design! I really like the clean layout and the use of color.</p>
                </CardContent>
                <CardFooter className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <HeartIcon className="h-4 w-4" />
                    <span className="sr-only">Like</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MessageCircleIcon className="h-4 w-4" />
                    <span className="sr-only">Comment</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <ShareIcon className="h-4 w-4" />
                    <span className="sr-only">Share</span>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-0.5">
                    <div className="font-medium">John Doe</div>
                    <div className="text-xs text-muted-foreground">Liked 3 days ago</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>Loving the new feature update! It's really improved the user experience.</p>
                </CardContent>
                <CardFooter className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <HeartIcon className="h-4 w-4" />
                    <span className="sr-only">Like</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MessageCircleIcon className="h-4 w-4" />
                    <span className="sr-only">Comment</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <ShareIcon className="h-4 w-4" />
                    <span className="sr-only">Share</span>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Followers/Following</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="flex items-center justify-between">
                <div>Followers</div>
                <div className="font-medium">1,234</div>
              </div>
              <div className="flex items-center justify-between">
                <div>Following</div>
                <div className="font-medium">567</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}


function ShareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}