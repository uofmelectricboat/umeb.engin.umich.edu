# UMEB Website

1. [Previewing the Website](#preview)
2. [Updating the Website](#update)
    - [Sponsors](#update-sponsors)
    - [Team Page](#update-team)
    - [Contact Page](#update-contact)
    - [Social Media Links](#update-social)
    - [Boats Page](#update-boats)
    - [Heros (Header Images)](#update-heros)

## Previewing the Website <a name="preview"></a>

Below are the steps to viewing this website locally:

1. Open a terminal window.

2. From the terminal, direct to the folder you would like to copy this project into. For example, if you want it in an existing folder on your Desktop named "boat", run the command ```cd Desktop/boat```.

3. Run the command:
   - ```git clone https://github.com/uofmelectricboat/umeb.engin.umich.edu.git``` (to use your personal access token)
   - OR ```git clone git@github.com:uofmelectricboat/umeb.engin.umich.edu.git``` (to use your SSH key)
   - ALTERNATIVELY: If you only need view-access to the code, click the green "Code" button near the top of this page then click "Download ZIP". Unzip the file into your desired folder. Skip to step 5.

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

## Updating the Website <a name="update"></a>

The site auto-updates based on CSV file data in ```umeb/assets/data/```, for the most part. There are specific instructions to update these files, as the JavaScript code expects a certain format. These expectations are outlined below.

Important CSV formatting notes:
* **Any CSV fields containing a comma must be wrapped in quotes.**
* New lines within a CSV field are not currently supported in this project.
* If you are having issues making changes, import the CSV file into Google Sheets. After making changes, you can download the sheet as a CSV file to replace the original.

Changes beyond updating these files are non-trivial and require knowledge in HTML/CSS/JavaScript. Instructions to do this are not included below.

### Updating Sponsors <a name="update-sponsors"></a>

Sponsor data is in ```umeb/assets/data/sponsors/``` in files ```platinum.csv```, ```gold.csv```, ```silver.csv```, and ```bronze.csv```. On the website, this data is displayed in the site footer and the "Sponsor" subpage.

The columns in ```platinum.csv``` and ```gold.csv``` are:
* _name_ - sponsor name
* _image_path_ - relative path to logo image, rooted at ```umeb/```
* _url_ - URL of the sponsor's website. Use ```about:blank``` if they don't have a website.
* _paragraph_ - blurb about the sponsor. MUST be wrapped in quotes.

The columns in ```silver.csv``` and ```bronze.csv``` are:
* _name_ - sponsor name
* _image_path_ - relative path to logo image, rooted at ```umeb/```
* _url_ - URL of the sponsor's website. Use ```about:blank``` if they don't have a website.

#### Adding a Sponsor

Modify the respective CSV file to reflect the new sponsor. Then put the sponsor logo in ```umeb/assets/img/sponsors/``` and reflect the image's name in the image_path attribute of the CSV file. Note that sponsors will appear on the page in the same order as the CSV file.

#### Removing a Sponsor

Simply remove the sponsor's row from the respective CSV file. We strongly recommend deleting the corresponding logo from ```umeb/assets/img/sponsors/```, but the logo will not show up without it's image_path in a CSV file.

### Updating Team Members <a name="update-team"></a>

Team member data is in the file ```umeb/assets/data/team.csv```. On the website, this data is displayed on the "Team" subpage.

The columns in ```team.csv``` are:
* _name_ - member name
* _major_ - member major. For multiple majors, separate with a ```/``` symbol (e.g. "Computer Science / Physics").
* _subteam_ - member subteam
    * 0 = Leadership (i.e. Captain, Chief Engineer)
    * 1 = Directors (i.e. Electrical Director, Business Director, etc)
    * 2 = Project Leads (i.e. Software Lead, Controls Lead, etc)
    * 3 = Software
    * 4 = Controls
    * 5 = Powertrain
    * 6 = Structures
    * 7 = Drivetrain
    * 8 = Operations
    * 9 = Business
    * 10 = Cooling
* _role_ - member role. Blank for members below "Project Lead".
* _image_path_ - relative path to headshot, rooted at ```umeb/```

#### Adding a Member

Modify ```team.csv``` to reflect the new team member. Then put their picture in ```umeb/assets/img/headshots/``` and reflect the image's name in the image_path attribute of the CSV file.

Note that members will appear in their subteam section in the same order as the CSV file.

Reminders:
* Separate multiple majors with a ```/``` symbol (e.g. "Computer Science / Physics").
* Leave the _role_ field blank unless the member is an Admin or Lead.
* Leave the _image_path_ field blank to use the default picture.
* When leaving a field blank, make sure to still include commas (except at the end).
    * For example, to add a member with no role or headshot, use the format: "Jane Doe,Business,10,,"

#### Removing a Member

Simply remove the members's row from the respective CSV file. We strongly recommend deleting the corresponding headshot from ```umeb/assets/img/headshots/```, but the headshot will not show up without it's image_path in the CSV file.

#### Updating Subteams

The CSV _subteam_ index to text mapping is at the top of the ```team.js``` file in the ```umeb/assets/js/``` directory. Update the ```subteams``` variable to make changes.

BEWARE: updating this variable will affect how ```team.csv``` is read. When editing this variable, verify that the "Team" subpage loads as expected. If not, update the CSV file to reflect your changes.

Note that subteams on the webpage are ordered by ```subteams```.

### Updating Leadership Contact Information <a name="update-contact"></a>

Leadership contact information is in the file ```umeb/assets/data/contact.csv```. On the website, this data is displayed on the "Contact" subpage.

The columns in ```contact.csv``` are:
* _name_ - contact name
* _title_ - contact title/role
* _email_ - umich email

All admin and useful contacts for sponsors / potential new members should be included in this file.

Update this file by adding/removing rows from ```contacts.csv```. Contacts will appear on the webpage in the same order as the CSV.

### Updating Team Social Media Pages <a name="update-social"></a>

Team social media account data is in the file ```umeb/assets/data/socials.csv```. On the website, this data is displayed in the site footer.

The columns in ```socials.csv``` are:
* _name_ - social media website name
* _image_path_ - relative path to SVG icon, rooted at ```umeb/```
* _url_ - URL to team page on respective social media website

#### Adding a Social Media Account

Modify ```socials.csv``` to reflect the new social media account.

Then put the social media website's logo SVG in ```umeb/assets/img/icons/``` and reflect the image's name in the image_path attribute of the CSV file. Edit the SVG so that ```width``` and ```height``` are ```48px``` and ```fill``` is ```#00274C``` (see other files in ```icons/``` as examples).

Note that social media accounts will appear on the page in the same order as the CSV file.

#### Removing a Social Media Account

Simply remove the respective row from ```socials.csv```. We strongly recommend deleting the corresponding logo from ```umeb/assets/img/icons/```, but the logo will not show up without it's image_path in the CSV file.

### Updating Boats <a name="update-boats"></a>

Boat data is in the file ```umeb/assets/data/boats.csv```. On the website, this data is displayed on the "Boats" subpage.

The columns in ```boats.csv``` are:
* _name_ - boat name
* _image_path_ - relative path to image, rooted at ```umeb/```
* _paragraph_ - one-paragraph description of the boat

Note that boats show up on the webpage in the same order as the CSV file.

When adding rows, please insert a corresponding image in ```umeb/assets/img/boats/```. Please use the existing naming convention in that folder.

When deleting/replacing rows, please delete the corresponding image from ```umeb/assets/img/boats/```.

### Updating Main Page <a name="update-main"></a>

Homepage data is in the file ```umeb/assets/data/values.csv```. On the website, this data is displayed on the "Home" page.

The columns in ```values.csv``` are:
* _name_ - section title
* _image_path_ - relative path to image, rooted at ```umeb/```
* _paragraph_ - one-paragraph description

When adding rows, please insert a corresponding image in ```umeb/assets/img/values/```. Please use the existing naming convention in that folder.

When deleting/replacing rows, please delete the corresponding image from ```umeb/assets/img/values/```.

### Updates Header Images <a name="update-heros"></a>

To update the image at the top of each page, navigate to ```umeb/assets/img/heros/```. Replace the respective subpage's image with the new image.

If the filename must change (e.g. old filename is "main.jpg" but the new filename is "main.png"), you must also update the ```heros``` variable in ```umeb/assets/js/essentials.js```. This variable can be found in the ```loadHeros()``` function.
