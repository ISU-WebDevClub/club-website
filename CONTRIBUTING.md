# How to Contribute

## New to git?

No worries! This is a club to *learn and grow* after all. You can find a wonderful tutorial on getting started with git [here](https://github.com/GSoft-SharePoint/Dynamite/wiki/Getting-started-with-SourceTree,-Git-and-git-flow).

**Initial steps:**

- Setup a GitHub account
- Fork the club-website repo
- Clone it to your desktop
- You're ready to go!

Then just head to the [Issues](https://github.com/ISU-WebDevClub/club-website/issues) page to find a fun feature or bug to tackle. If you have problems or questions, feel free to reach out to one of the other club members, and they should be able to give you a hand getting started.

## Issue Tracking

We track bugs and features to be added in the [Issues](https://github.com/ISU-WebDevClub/club-website/issues) section.

- To submit an issue:
    - Clearly describe the issue including steps to reproduce when it is a bug.
    - Add a ticket number at the beginning of the issue title. The number should be one higher than the last issue that was created.
    - Example: `0001 - Create a CONTRIBUTING file`
    - Add relevant labels and milestone tags.
- When you start work on an issue, **comment in the issue that you've started progress**. This will prevent multiple people from working on the same thing and possibly having their time wasted.
- Create a branch on your local copy of the repo.
    - Name your branch with a title matching the issue name and number, and with underscores instead of spaces.
    - Example: `0001_Create_a_CONTRIBUTING_file`

## Getting your code merged

Once you've finished coding, take the following steps to get your contribution merged:

- Push the local branch to your remote branch.
- In GitHub, create a pull request to ISU Web Dev Club's club-website repo. Use the branch name (without underscores) as the title of the pull request, and copy/paste the [template listed below](#pull-request-template) into the pull request text body. Make sure you list someone from the club to review your code before it gets merged.
- The reviewer may make recommendations for fixes before your code can be merged. Address any code review comments and commit/push them to your repo. There's no need to create another pull request, the pushed changes will reflect in your outstanding pull request.
- Once the reviewer is satisfied, he'll give it a +1 using the [template listed below](#code-review-1-template).
- One of the officers will merge the pull request, and voilá! You have successfully contributed to the ISU Web Development Club's website. Your changes won't be visible right away, but will show up in the next production release.

## Code Format / Standards

**We'll need to discuss these as a club and determine what we want our coding standards to be**

## Pull Request Template

Copy/paste the following into your pull request, and then fill in the details. Assign one of the other club members as a reviewer.

```
### Problem / Feature

### Solution

### What To Test

### Reviewers

@REVIEWER

FYI: @KrashLeviathan @csteamengine @regalcat

```

## Code Review +1 Template

Copy/paste the following into a comment when you're ready to complete the code review. Ensure you've taken all the steps listed, and check them off to indicate they're done. Anything in parenthesis you should replace with details specific to the pull request. Once the code has gotten a +1, one of the officers will merge it into the repo.

```
+1

[ ] Pulled master before testing
[ ] Verified Acceptance Criteria
  - [ ] (description)
[ ] Regression testing
  - [ ] (description)
[ ] Test Coverage
  - [ ] (Tests added / No additional tests necessary)
  - [ ] Tests all pass
```

## Making trivial changes

### Documentation

For changes of a trivial nature to comments and documentation, it is not always necessary to create a new Issue. In this case, it is appropriate to start the first line of a commit with '(doc)' instead of a ticket number.