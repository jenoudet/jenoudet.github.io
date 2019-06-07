from setuptools import setup

setup(
    name='ArthurJenoudetWebsite',
    version='0.1.0',
    packages=['ArthurJenoudetWebsite'],
    include_package_data=True,
    install_requires=[
        'arrow==0.13.0',
        'bs4==0.0.1',
        'Flask==1.0.2',
        'Flask-Testing==0.7.1',
        'html5validator==0.3.1',
        'nodeenv==1.3.3',
        'requests==2.21.0',
        'selenium==3.141.0',
        'sh==1.12.14',
    ],
)
