# UMEB Website

## TODOs:

- [ ] Add pictures of the rest of the team to umeb/assets/img/headshots/
- [ ] Add remaining team members to umeb/assets/data/team.csv
- [ ] Allow sponsor logos to link to sponsor website
- [ ] Add remaining sponsor website urls to umeb/assets/data/sponsors/
- [ ] Embed sponsor packet to sponsor page
- [ ] Add "Races" page with info from umeb.vercel.app
- [ ] Fix "Team" page lag due to map implementation (consider diving subteams into separate CSVs -- like /sponsors/)
- [ ] Write documentation for how to update various aspects of the site
- [ ] Integrate with Jekyll
- [ ] Push site to umeb.engin.umich.edu

## Previewing the Website

Below are the steps to viewing this website locally:

1. Open a terminal window.

2. From the terminal, direct to the folder you would like to copy this project into. For example, if you want it in an existing folder on your Desktop named "boat", run the command ```cd Desktop/boat```.

3. Run the command:
   - ```git clone https://github.com/uofmelectricboat/umeb.engin.umich.edu.git``` (to use your personal access token)
   - OR ```git clone git@github.com:uofmelectricboat/umeb.engin.umich.edu.git``` (to use your SSH key)

4. If neither of the above commands work, that means you have yet to set up a personal access token or SSH on your device. Follow:
   - [this guide](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) to create a personal access token (recommended for single use)
   - OR [this guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) to set up an SSH key (recommended for long-term use)

5. Open a new window of VS Code. Open the ```umeb.engin.umich.edu/umeb/``` folder.

6. Go to the "Extensions" tab on the left sidebar of VS Code. If you can't find it, navigate to "View > Extensions" from the top menu.

<img width="200" alt="Screenshot 2024-03-18 at 2 31 25 PM" src="https://github.com/uofmelectricboat/umeb.engin.umich.edu/assets/101139170/3d16f515-c3a9-4c05-bfd1-86544484b47e">

<img width="200" alt="Screenshot 2024-03-18 at 2 32 29 PM" src="https://github.com/uofmelectricboat/umeb.engin.umich.edu/assets/101139170/f574aca4-e6ab-422f-a1e9-780fb1383cae">

7. Download the "Live Preview" extension. Wait for it to install.

<img width="500" alt="Screenshot 2024-03-18 at 2 33 36 PM" src="https://github.com/uofmelectricboat/umeb.engin.umich.edu/assets/101139170/0b5d268b-bba1-4265-816a-69e6a3ab3b83">

8. Go back to VS Code's "Explorer" tab. Right click the main ```index.html``` file (or any ```index.html``` file in the project). Select "Show Preview".

<img width="500" alt="Screenshot 2024-03-18 at 2 34 19 PM" src="https://github.com/uofmelectricboat/umeb.engin.umich.edu/assets/101139170/44c24dfd-6d53-4541-8266-5714bf7628d4">

9. A preview window should pop up next to the code. Copy-paste the URL (highlighted in the screenshot below) into Google Chrome (or any other browser) to preview the website on a full browser.

<img width="500" alt="Screenshot 2024-03-18 at 2 34 48 PM" src="https://github.com/uofmelectricboat/umeb.engin.umich.edu/assets/101139170/e4370888-9965-44f6-9c5e-695a480a63af">

10. You can now preview the website. Any changes you make to the code will auto-update in the VS Code window (as well as in your browser if you copy-pasted the URL). You may have to refresh the window if you don't see your changes right away.

## Updating the Website

The site auto-updates based on CSV file data in ```umeb/assets/data/```, for the most part. There are specific instructions to update these files, as the JavaScript code expects a certain format. These expectations are outlined below.

Changes beyond updating these files require knowledge in HTML/CSS/JavaScript. Instructions to do this are not included below.

### Updating Sponsors

Sponsor data is in ```umeb/assets/data/sponsors/``` in files ```platinum.csv```, ```gold.csv```, ```silver.csv```, and ```bronze.csv```. On the website, this data is displayed in the site footer and the "Sponsor" subpage.

### Updating Team Members

Team member data is in the file ```umeb/assets/data/team.csv```. On the website, this data is displayed on the "Team" subpage.

### Updating Leadership Contact Information

Leadership contact information is in the file ```umeb/assets/data/contact.csv```. On the website, this data is displayed on the "Contact" subpage.

### Updating Team Social Media Accounts

Team social media account data is in the file ```umeb/assets/data/socials.csv```. On the website, this data is displayed in the site footer.

### Updating Boats

Boat data is in the file ```umeb/assets/data/boats.csv```. On the website, this data is displayed on the "Boats" subpage.

### Updating Main Page

Main webpage data is in the file ```umeb/assets/data/values.csv```. On the website, this data is displayed on the "Home" page.
