"""VoteNow python package configuration."""

from setuptools import setup

setup(
    name='votenow',
    version='0.1.0',
    packages=['votenow'],
    include_package_data=True,
    install_requires=[
        'Flask==0.12.2',
        'arrow==0.10.0',
        'sh==1.12.14',
        'requests >=2.20.0',
        'nodeenv',
    ],
)
